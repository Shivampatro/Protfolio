import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();

        if (!email || !message || !name) {
            return json({ success: false, error: 'Missing fields' }, { status: 400 });
        }

        console.log(`New contact message from ${name} (${email}): ${message}`);

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer re_Ppgc2TbU_PpiExSSWMKpxc4dSpxtk3V2Q`
            },
            body: JSON.stringify({
                from: 'Portfolio <onboarding@resend.dev>',
                to: 'shivampatro60@gmail.com',
                subject: `New Message from ${name} (${email})`,
                html: `<p><strong>Name:</strong> ${name}</p><p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
            })
        });

        const data = await res.json();

        if (res.ok) {
            return json({ success: true, data }, { status: 200 });
        } else {
            console.error('Resend Error:', data);
            return json({ success: false, error: data.message || 'Failed to send email' }, { status: res.status });
        }
    } catch (error) {
        console.error('API Error:', error);
        return json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
