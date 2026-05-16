exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const GITHUB_TOKEN = process.env.GITHUB_PAT;
    
    if (!GITHUB_TOKEN) {
        return { 
            statusCode: 500, 
            body: JSON.stringify({ error: "GITHUB_PAT non configurato in Netlify" }) 
        };
    }

    try {
        const response = await fetch('https://api.github.com/repos/stefanochiandotto9898-ctrl/spesa-app/dispatches', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_type: 'trigger-scraper'
            })
        });

        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Aggiornamento avviato con successo" })
            };
        } else {
            const errorText = await response.text();
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: "Errore API GitHub", details: errorText })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Errore interno server", details: error.message })
        };
    }
};
