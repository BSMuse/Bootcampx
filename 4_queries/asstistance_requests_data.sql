SELECT teachers.name as teachers, 
students.name as students, 
assignments.name as assignment, 
(assistance_requests.completed_at - assistance_requests.started_at) as duration 
FROM assistance_requests 
JOIN teachers ON teacher_id = teachers.id 
JOIN students ON student_id = students.id 
JOIN assignments on assignment_id = assignments.id
ORDER BY duration;

