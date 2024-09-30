function submitForm() {
    var paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;
    
    if (paymentMethod === "CreditCard") {
        window.location.href = "PaymentCreditCard.html";
        return false; 
    }

    else if(paymentMethod === "DebitCard"){
        window.location.href = "PaymentDebitCard";
        return false;
    }
    
    return true;
}