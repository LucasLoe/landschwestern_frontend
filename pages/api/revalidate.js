import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';

const revalidate = async (req, res) => {

    //authenticating the webhook
    try {
        const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
        if (
            !isValidSignature(
                JSON.stringify(req.body),
                signature,
                process.env.SANITY_WEBHOOK_SECRET
            )
        )
            return res.status(401).json({ msg: 'Invalid request!' });

        //getting payload
        console.log(req.body._type)
        const { page } = req.body._type;
        console.log(`/${page}`)
        await res.revalidate(`/${page}`);
        

        res.status(200).json({ msg: 'Pages revalidated.' });
    } catch (error) {
        res.status(500).json({ err: 'Something went Wrong!' });
    }
};

export default handler;