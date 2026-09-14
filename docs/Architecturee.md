# IHBI Test Series — Architecture

## High-Level Architecture

The application will be divided into several major layers.

```text
User
  ↓
Frontend
  ↓
Application / Backend
  ↓
Authentication & Authorization
  ↓
Database
  ↓
External Services
```

## Anti-Cheating & Test Violation System

The platform uses configurable test-violation detection rather than claiming
perfect cheating prevention.

### Supported V1 Detection

The system can detect:

- Tab/window/background changes
- Fullscreen exits when fullscreen is required

Each detected event creates a test violation record associated with:

- Student
- Test
- Attempt
- Violation type
- Timestamp
- Violation count
- Relevant metadata

### Violation Policy

Anti-cheating behavior is configurable per test.

Default policy:

| Violation | Action                       |
| --------- | ---------------------------- |
| 1st       | Warning                      |
| 2nd       | Warning                      |
| 3rd       | Automatically submit attempt |

After automatic submission:

- The attempt becomes permanently submitted.
- The student cannot resume that attempt.
- The submission is recorded as an automatic submission.
- The violation history is retained.

The administrator may configure:

- Violation threshold
- Warning behavior
- Automatic submission behavior
- Whether specific detection rules are enabled

### Future Proctoring

Camera/proctoring functionality is intentionally excluded from V1.

The violation architecture is designed to support future events such as:

- Camera disconnected
- Face not detected
- Multiple persons detected
- Other configurable proctoring events

These future events should use the same violation framework rather than
introducing a separate anti-cheating system.

### Important Limitation

Browser-based detection cannot guarantee detection of every possible cheating
method. The system therefore records and responds to detectable test
violations rather than representing itself as a complete cheating-prevention
solution.
