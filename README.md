# Credit Card Number Validator Using Regex

This is a JavaScript program that validates verve credit card numbers using Regular expressions and OOP principles.

The validation logic is based on the regex pattern: ^(5060|6500|5078)[0-9]{12,13}$

This pattern ensures that:

1. The card number starts with a verve prefix which is either 5060, 6500 or 5078.

2. It is followed by 12 or 13 digits making the total length of the card number 16-17 digits.

3. The string must match the pattern from start(^) to finish($)
