// i will be writing the command of sql here only
// 1st question
SELECT S.sname 
FROM Suppliers S, Parts P, Catalog C 
WHERE P.pname=’motor belt’ 
AND C.pid=P.pid AND C.sid=S.sid;

//2nd question

SELECT sname
FROM Suppliers X
WHERE NOT EXISTS (
(SELECT pid FROM Parts)
MINUS
(SELECT pid
FROM Catalog
WHERE sid=X.sid)
);




//question no 2 for single query
SELECT brand_name,user_name,email, point_value 
FROM transaction a
WHERE 1 < 
    (SELECT COUNT(*) 
     FROM user 
     WHERE brand_id=a.brand_id);