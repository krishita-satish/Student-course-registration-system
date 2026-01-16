package com.university.grading;

import com.university.enrollment.Enrollment;
import com.university.exceptions.InvalidGradeException;

public class GradeService {

    public void assignMarks(Enrollment enrollment, int marks)
            throws InvalidGradeException {

        if (marks < 0 || marks > 100) {
            throw new InvalidGradeException("Marks must be between 0 and 100");
        }

        enrollment.setMarks(marks);
        enrollment.setGrade(convertToGrade(marks));
    }

    private String convertToGrade(int marks) {

        if (marks >= 91) return "O";
        if (marks >= 81) return "A";
        if (marks >= 71) return "A+";
        if (marks >= 61) return "B";
        if (marks >= 56) return "B+";
        if (marks >= 50) return "C";
        return "F";
    }
}
