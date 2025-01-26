import mongoose, { Types } from "mongoose";


const loanSchema = mongoose.Schema({
    amount: { type: String },
    laon: { type: String },
    paydate: { type: String }
});


const loanModel = mongoose.model("Loan", loanSchema);

export default loanModel