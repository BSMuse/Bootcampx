const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  client.query('SELECT NOW()', (queryError, result) => {

    if (queryError) {
      console.error('Error running query:', queryError);
      return;
    }

    console.log('Query result:', result.rows[0]);
  });
});

const cohortName = process.argv[2];
const limitValue = process.argv[3] || 5;

pool.query(
  `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `,
  [`%${cohortName}%`, limitValue]
)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));
