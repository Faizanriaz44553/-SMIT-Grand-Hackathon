import loanModel from '../../models/schema.js';



const LoanAddController = async (req , res)=>{
    try {
        const {amount , laon , paydate} = req.body;

        if (!amount || !laon || !paydate) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const data = {amount , laon , paydate}
        const responce = await loanModel.create(data);
        return res.status(200).send({ status: 200, massage: "succesfull create loan", data: responce });
    } catch (error) {
        res.status(500).send({ status: 500, massage: "server error", data: error });
    }
}


export default LoanAddController