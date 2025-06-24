import orderModel from '../models/order.model.js'
import userModel from '../models/user.model.js';

//Placing orders using cash on delivery COD
const placeOrder=async(req,res)=>{
    try {
        const {userId, items,amount,address} = req.body;

        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment: false,
            date: Date.now()
        }

        const newOrder= new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        res.json({success:true,message:"Order Placed"});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}



//Placing orders using Stripe
const placeOrderStripe=async(req,res)=>{

}


//Placing orders using Razorpay method
const placeOrderRazorpay=async(req,res)=>{

}

//All Orders data for admin panel
const allOrders=async(req,res)=>{
        try {
            const orders= await orderModel.find({});
            res.json({success:true,orders})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:error.message}); 
        }
}


//User order data for frontend
const userOrders=async(req,res)=>{
    try {
        const {userId} = req.body;
        const orders= await orderModel.find({userId});
        res.json({success:true,orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});     
    }

}


//Update order status from admin panel
const updateStatus=async(req,res)=>{
    try {
        const {orderId,status} = req.body;
        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
         console.log(error);
        res.json({success:false,message:error.message});   
    }
}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}
