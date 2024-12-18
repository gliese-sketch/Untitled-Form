Form Fill

1. Navigate to Google forms forms.google.com
2. Create a new form (post-fix development)
3. Create input fields with type paragraph to match our actual form
4. Total 4 fields with type paragraph (maximum text limit)
5. Publish your form
6. Go to the three dots -> get prefilled link
7. Insert some random values here
8. Then click on get click and then copy the link address
9. Paste that link in .env file
10. Now break the link after "viewform" and before every "&"
11. Change the "viewform" part to "formResponse"
12. The text starting with http: is our form link
13. The values starting with entry are our field names
14. At the end we will have total 5 values (one url and 4 name entry)
15. We can now use these values to fill out our form and submit to google forms
16. In our <form element> remove the onSubmit={} and add action="form url"
17. In our input fields we need to enter the for every single input
18. Update the name of every input to match "entry." that we copied
19. Go over to response and then click on view in sheets and then connect a new spreadsheet
20. Then go to file > share > publish to web option
21. then copy the link
