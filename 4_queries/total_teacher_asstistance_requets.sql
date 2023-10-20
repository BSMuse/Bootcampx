SELECT COUNT(teacher_id) as total_assistances, teachers.name
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
GROUP BY teachers.name
HAVING teachers.name = 'Waylon Boehm'