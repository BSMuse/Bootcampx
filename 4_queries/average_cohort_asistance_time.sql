SELECT cohorts.name, AVG(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests 
JOIN students ON student_id = students.id 
JOIN cohorts on cohort_id = cohorts.id
GROUP By cohorts.name
ORDER BY AVG(completed_at - started_at);