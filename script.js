document.getElementById('sqlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    
    // Fetch values from form fields
    const product = document.getElementById('product').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const filters = Array.from(document.querySelectorAll('input[name="filters"]:checked')).map(e => e.value);
    const dimensions = document.getElementById('dimensions').value;
    const metrics = document.getElementById('metrics').value;
    const comments = document.getElementById('comments').value;
  
    // Generate SQL query (example)
    const query = `SELECT ${metrics} FROM transactions WHERE product = '${product}' 
                   AND date BETWEEN '${startDate}' AND '${endDate}'
                   AND filters IN (${filters.join(', ')})
                   AND dimensions = '${dimensions}';`;
  
    // Output the query
    document.getElementById('output').textContent = query;
  });
  