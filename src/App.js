import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchTransactions } from './api';
import { calculateRewards } from './rewardsCalculator';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h2``;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TotalRewards = styled.div`
  font-weight: bold;
`;

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then(data => setTransactions(data));
  }, []);

  const rewardsData = transactions.map(transaction => ({
    ...transaction,
    reward: calculateRewards(transaction.amount)
  }));

  return (
    <Container>
      <Title>Rewards Program</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Customer ID</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Reward</TableHeader>
          </tr>
        </thead>
        <tbody>
          {rewardsData.map((transaction, index) => (
            <tr key={index}>
              <TableCell>{transaction.customerId}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.reward} points</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <TotalRewards>
        Total Rewards: {rewardsData.reduce((acc, curr) => acc + curr.reward, 0)} points
      </TotalRewards>
    </Container>
  );
}

export default App;
