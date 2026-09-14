# IHBI Test Series — Requirements

This document is the master list of planned functionality.

Features may be added or changed as the project develops.

---

# 1. Authentication

- [ ] Super Admin login
- [ ] Teacher login
- [ ] Student login
- [ ] Parent login
- [ ] Student login using Student ID, email, or mobile
- [ ] Parent login using Parent ID, email, or mobile
- [ ] Password authentication
- [ ] Secure password hashing
- [ ] Forgot password
- [ ] Password reset
- [ ] Role-based authorization

---

# 2. Admin / Super Admin

- [ ] Admin dashboard
- [ ] Manage teachers
- [ ] Manage teacher permissions
- [ ] Manage students
- [ ] Manage parents
- [ ] Approve student registrations
- [ ] View enrolled students
- [ ] Search students
- [ ] Filter students
- [ ] View student performance
- [ ] Create tests
- [ ] Edit tests
- [ ] Delete/archive tests
- [ ] Publish tests
- [ ] Control result release
- [ ] View test results
- [ ] Generate PDF reports
- [ ] Send emails/messages
- [ ] View rankings
- [ ] View analytics

---

# 3. Student Management

- [ ] Student self-registration
- [ ] Admin-created student accounts
- [ ] Student profile
- [ ] Student ID
- [ ] Email
- [ ] Mobile number
- [ ] Batch assignment
- [ ] Exam assignment
- [ ] Student status
- [ ] Parent linking

---

# 4. Parent Management

- [ ] Parent accounts
- [ ] Simple Parent ID
- [ ] Parent password
- [ ] Parent email
- [ ] Parent mobile
- [ ] Link parent to student
- [ ] Parent dashboard
- [ ] View child's test history
- [ ] View child's scores
- [ ] View child's performance
- [ ] View child's rankings
- [ ] View progress over time

---

# 5. Test Management

- [ ] Create test
- [ ] Test title
- [ ] Test description
- [ ] Exam selection
- [ ] Subject selection
- [ ] Topic selection
- [ ] Marks per question
- [ ] Negative marking
- [ ] Test duration
- [ ] Test opening time
- [ ] Test closing time
- [ ] Attempt limit
- [ ] Result release control
- [ ] Test instructions
- [ ] Test status

Possible test states:

Draft → Published → Active → Completed → Results Pending → Results Released

---

# 6. Question Management

Initial question type:

- [ ] Single-correct MCQ

Question information should support:

- [ ] Question text
- [ ] Option A
- [ ] Option B
- [ ] Option C
- [ ] Option D
- [ ] Correct answer
- [ ] Marks
- [ ] Negative marks
- [ ] Subject
- [ ] Topic
- [ ] Explanation

Future question types:

- [ ] Multiple correct
- [ ] Assertion & Reason
- [ ] Numerical
- [ ] True/False
- [ ] Image-based questions
- [ ] Match the following

---

# 7. CSV Question Upload

- [ ] CSV template
- [ ] Upload CSV
- [ ] Validate CSV
- [ ] Preview imported questions
- [ ] Detect invalid questions
- [ ] Detect missing fields
- [ ] Detect invalid answers
- [ ] Detect duplicate questions
- [ ] Confirm import
- [ ] Import questions into database

---

# 8. Student Test Experience

- [ ] Test instructions
- [ ] Start test
- [ ] Countdown timer
- [ ] Question navigation
- [ ] Previous question
- [ ] Next question
- [ ] Question palette
- [ ] Answer selection
- [ ] Clear answer
- [ ] Mark for review
- [ ] View answered/unanswered status
- [ ] Manual submission
- [ ] Automatic submission
- [ ] Server-controlled test timing
- [ ] Attempt protection

---

# 9. Results

- [ ] Score calculation
- [ ] Correct answers
- [ ] Wrong answers
- [ ] Unattempted questions
- [ ] Negative marking calculation
- [ ] Percentage
- [ ] Result release control
- [ ] Previous test results
- [ ] Test review
- [ ] Answer explanations
- [ ] Result history

---

# 10. Performance Analytics

- [ ] Overall performance
- [ ] Subject performance
- [ ] Topic performance
- [ ] Accuracy
- [ ] Attempt analysis
- [ ] Correct/wrong/unattempted analysis
- [ ] Progress over time
- [ ] Test-to-test comparison
- [ ] Weak topic identification
- [ ] Strong topic identification

---

# 11. Rankings

- [ ] Overall rank
- [ ] Subject rank
- [ ] Topic rank
- [ ] Test-specific rank
- [ ] Leaderboard
- [ ] Student names on leaderboard
- [ ] Rank calculation rules
- [ ] Tie-breaking rules

---

# 12. Reports

- [ ] Detailed test report
- [ ] Student performance report
- [ ] Subject analysis
- [ ] Topic analysis
- [ ] Ranking information
- [ ] Question analysis
- [ ] PDF generation
- [ ] PDF download
- [ ] PDF sharing/email

---

# 13. Communication

- [ ] Send email to student
- [ ] Send email to parent
- [ ] Send announcements
- [ ] Email templates
- [ ] Test-related notifications
- [ ] Result notifications

---

# 14. Batches

Batch structure is not finalized yet.

Planned support:

- [ ] Create batches
- [ ] Assign students to batches
- [ ] Assign tests to batches
- [ ] Filter students by batch

---

# 15. Security

- [ ] Secure authentication
- [ ] Password hashing
- [ ] Role-based access control
- [ ] Server-side authorization
- [ ] Server-controlled test timing
- [ ] Student data protection
- [ ] Parent data isolation
- [ ] Input validation
- [ ] Protection against unauthorized result access
- [ ] Environment secrets
- [ ] Database security
- [ ] Audit logging

---

# 16. Production

- [ ] Production database
- [ ] Environment variables
- [ ] Database backups
- [ ] Deployment
- [ ] Custom domain
- [ ] SSL/HTTPS
- [ ] Error monitoring
- [ ] Performance monitoring
- [ ] Security review
- [ ] Production testing

---

# Deferred / Future Features

These are intentionally not part of the initial build unless requirements change:

- Payment/subscriptions
- Commercial test series
- Advanced anti-cheating
- Webcam monitoring
- AI-based performance analysis
- Additional examination types
- Advanced question types
