SELECT assignments.day, 
COUNT(assignments.day) as number_of_assignments,
SUM(assignments.duration) as duration
FROM assignments
GROUP By assignments.day 
ORDER BY assignments.day;


