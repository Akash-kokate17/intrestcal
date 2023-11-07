function getAmount(){
    let x, y,z, si, total;
    x = pamt.value;
    y = roi.value;
    z =  time.value;
    si = x*y*z/100
    total = +x+si
    interest.value="interest amount :"+si.toFixed(2)
    totAmt.value="total amount:"+total.toFixed(2)
}