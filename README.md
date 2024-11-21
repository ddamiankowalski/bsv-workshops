# bsv-workshops
Documentation for BSV workshops in Poznań 2024


Link to the event: https://app.evenea.pl/event/884187-7/


Each block is structured as follows(in order):
- theoretical introduction with a presentation
- exercise
- comparing the results of the exercise
- Q&A

DAY 1
1. Blockchain theory(3h)
  1.1. theory content:
    1.1.1. history of blockchain
    1.1.2. architecture
    1.1.3. main concepts
    1.1.4. cryptocurrency vs real blockchain use cases
    1.1.5. good knowledge sources for developers
    1.1.6. wallets and basic transaction flow from user experience
  1.2. exercise:
    1.2.1. initial installation of a chosen library for further development in the next block
2. Keys, addresses, transactions(3h)
  2.1. theory content:
    2.1.1. keys management
    2.1.2. addresses management
    2.1.3. UTXOs
    2.1.4. transaction creation and broadcasting
  2.2. exercise:
    2.1. create a transaction from scratch with the usage of UTXOs, broadcasting the created transaction, monitoring the transaction until mined
DAY 2
3. Transaction with data(1h)
  3.1. theory content:
    3.1.1. recall some knowledge from day 1
    3.1.2. ways to store some data within a transaction
    3.1.3. pros and cons of storing data in a blockchain
  3.2. exercise:
    3.2.1. create and broadcast the transaction with data
4. SPV and an example wallet implementation(4h)
  4.1. theory content:
    4.1.1. spv concept
    4.1.2. spv wallet usage for utxo management and transaction simplification
  4.2. exercise:
    4.2.1. run and use locally spv-wallet as a official wallet reference implementation, broadcast a transaction using the wallet
5. Tokenization(2h)(optional)
  5.1. theory content:
    5.1.1. token protocols
    5.1.2. basic token creation and flow
    5.1.3. real-world use cases for token
  5.2. exercise:
    5.2.1. create a simple token with a chosen protocol
