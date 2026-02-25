import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { email, message } = await request.json();

        // LOGGING FOR VERIFICATION (Check Vercel Dashboard Logs)
        console.log(`New contact message from ${email}: ${message}`);

        /**
         * TODO: Integrate with an email service like Resend or SendGrid.
         * 
         * Example with Resend:
         * 
         * const res = await fetch('https://api.resend.com/emails', {
         *   method: 'POST',
         *   headers: {
         *     'Content-Type': 'application/json',
         *     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
         *   },
         *   body: JSON.stringify({
         *     from: 'Portfolio <onboarding@resend.dev>',
         *     to: 'shivampatro60@gmail.com', // Your mail
         *     subject: `New Message from ${email}`,
         *     html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
         *   })
         * });
         */

        // For now, we'll return a success response if the data is received
        if (email && message) {
            return json({ success: true }, { status: 200 });
        } else {
            return json({ success: false, error: 'Missing fields' }, { status: 400 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
