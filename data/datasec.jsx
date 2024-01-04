const quizData = [
    {
      question: "Krishna buys an n-year 1000 bond at par. The Macaulay duration is 7.959 years using an annual effective interest rate of 7.2%. Calculate the estimated price of the bond, using the first-order modified approximation, if the interest rate rises to 8.0%.",
      options: ["940.60", "942.88", "944.56", "947.03", "948.47"],
      correctAnswer: "944.56",
    },
    {
      question: "The prices of zero-coupon bonds are: Maturity Price 1 0.95420 2 0.90703 3 0.85892 Calculate the one-year forward rate, deferred two years.",
      options: ["0.048", "0.050", "0.052", "0.054", "0.056"],
      correctAnswer: "0.050",
    },
    {
      question: "Sam buys an eight-year, 5000 par bond with an annual coupon rate of 5%, paid annually. The bond sells for 5000. Let 1 d be the Macaulay duration just before the first coupon is paid. Let 2 d be the Macaulay duration just after the first coupon is paid. Calculate 1 2 d d.",
      options: ["0.91", "0.93", "0.95", "0.97", "1.00"],
      correctAnswer: "0.95",
    },
    {
      question: "An insurance company must pay liabilities of 99 at the end of one year, 102 at the end of two years and 100 at the end of three years. The only investments available to the company are the following three bonds. Bond A and Bond C are annual coupon bonds. Bond B is a zero-coupon bond. Bond Maturity (in years) Yield-to-Maturity (Annualized) Coupon Rate A 1 6% 7% B 2 7% 0% C 3 9% 5% All three bonds have a par value of 100 and will be redeemed at par. Calculate the number of units of Bond A that must be purchased to match the liabilities exactly.",
      options: ["0.8807", "0.8901", "0.8975", "0.9524", "0.9724"],
      correctAnswer: "0.8975",
    },
    {
      question: "Determine which of the following statements is false with respect to Redington immunization.",
      options: [
        "Modified duration may change at different rates for each of the assets and liabilities as time goes by.",
        "Redington immunization requires infrequent rebalancing to keep modified duration of assets equal to modified duration of liabilities.",
        "This technique is designed to work only for small changes in the interest rate.",
        "The yield curve is assumed to be flat.",
        "The yield curve shifts in parallel when the interest rate changes."
      ],
      correctAnswer: "The yield curve shifts in parallel when the interest rate changes.",
    },
    {
      question: "Aakash has a liability of 6000 due in four years. This liability will be met with payments of A in two years and B in six years. Aakash is employing a full immunization strategy using an annual effective interest rate of 5%. Calculate A B −.",
      options: ["0", "146", "293", "586", "881"],
      correctAnswer: "586",
    },
    {
      question: "Jia Wen has a liability of 12,000 due in eight years. This liability will be met with payments of 5000 in five years and B in 8 + b years. Jia Wen is employing a full immunization strategy using an annual effective interest rate of 3%. Calculate B b.",
      options: ["2807", "2873", "2902", "2976", "3019"],
      correctAnswer: "2976",
    },
    {
      question: "Trevor has assets at time 2 of A and at time 9 of B. He has a liability of 95,000 at time 5. Trevor has achieved Redington immunization in his portfolio using an annual effective interest rate of 4%. Calculate A B.",
      options: ["0.7307", "0.9670", "1.0000", "1.0132", "1.3686"],
      correctAnswer: "0.7307",
    },
    {
      question: "You are given the following information about two bonds, Bond A and Bond B: i) Each bond is a 10-year bond with semiannual coupons redeemable at its par value of 10,000, and is bought to yield an annual nominal interest rate of i, convertible semiannually. ii) Bond A has an annual coupon rate of (i + 0.04), paid semiannually. iii) Bond B has an annual coupon rate of (i – 0.04), paid semiannually. iv) The price of Bond A is 5,341.12 greater than the price of Bond B. Calculate i.",
      options: ["0.042", "0.043", "0.081", "0.084", "0.086"],
      correctAnswer: "0.042",
    },
    {
      question: "A borrower takes out a 15-year loan for 400,000, with level end-of-month payments, at an annual nominal interest rate of 9% convertible monthly. Immediately after the 36th payment, the borrower decides to refinance the loan at an annual nominal interest rate of j, convertible monthly. The remaining term of the loan is kept at twelve years, and level payments continue to be made at the end of the month. However, each payment is now 409.88 lower than each payment from the original loan. Calculate j.",
      options: ["4.72%", "5.75%", "6.35 %", "6.90%", "9.14%"],
      correctAnswer: "5.75%",
    },
    {
      question: "Consider two 30-year bonds with the same purchase price. Each has an annual coupon rate of 5% paid semiannually and a par value of 1000. The first bond has an annual nominal yield rate of 5% compounded semiannually, and a redemption value of 1200. The second bond has an annual nominal yield rate of j compounded semiannually, and a redemption value of 800. Calculate j.",
      options: ["2.20%", "2.34%", "3.53%", "4.40%", "4.69%"],
      correctAnswer: "2.20%",
    },
    {
      question: "Lucas opens a bank account with 1000 and lets it accumulate at an annual nominal interest rate of 6% convertible semiannually. Danielle also opens a bank account with 1000 at the same time as Lucas, but it grows at an annual nominal interest rate of 3% convertible monthly. For each account, interest is credited only at the end of each interest conversion period. Calculate the number of months required for the amount in Lucas’s account to be at least double the amount in Danielle’s account.",
      options: ["276", "282", "285", "286", "288"],
      correctAnswer: "282",
    },
  ];

  export default quizData;

  
    