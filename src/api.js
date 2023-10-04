export const fetchTransactions = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { customerId: 1, amount: 55, date: "2023-01-10" },
          { customerId: 1, amount: 120, date: "2023-01-15" },
          { customerId: 2, amount: 73, date: "2023-01-18" },
          { customerId: 3, amount: 150, date: "2023-01-20" },
          { customerId: 2, amount: 200, date: "2023-02-01" },
          { customerId: 4, amount: 65, date: "2023-02-05" },
          { customerId: 5, amount: 110, date: "2023-02-10" },
          { customerId: 6, amount: 250, date: "2023-02-12" },
          { customerId: 4, amount: 80, date: "2023-02-15" },
          { customerId: 3, amount: 45, date: "2023-02-18" },
          { customerId: 1, amount: 130, date: "2023-03-01" },
          { customerId: 5, amount: 155, date: "2023-03-05" },
          { customerId: 6, amount: 50, date: "2023-03-10" },
          { customerId: 4, amount: 180, date: "2023-03-15" },
          { customerId: 2, amount: 90, date: "2023-03-18" },
          { customerId: 1, amount: 70, date: "2023-03-20" },
          { customerId: 3, amount: 220, date: "2023-03-25" },
          { customerId: 5, amount: 95, date: "2023-03-27" },
          { customerId: 4, amount: 105, date: "2023-03-28" },
          { customerId: 2, amount: 60, date: "2023-03-29" },
          { customerId: 6, amount: 140, date: "2023-03-30" },
          { customerId: 3, amount: 170, date: "2023-03-31" },
        ]);
      }, 2000); 
    });
  };
  