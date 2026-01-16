package com.university.students;

import com.university.enrollment.Enrollment;
import com.university.grading.GradePoint;
import java.util.List;

public class PostgraduateStudent extends Student {

    private List<Enrollment> enrollments;

    public PostgraduateStudent(String studentId, String name, int semester, List<Enrollment> enrollments) {
        super(studentId, name, semester);
        this.enrollments = enrollments;
    }

    @Override
    public double calculateGPA() {

        int maxSemester = this.semester;
        double totalGPA = 0;
        int countedSemesters = 0;

        for (int sem = 1; sem <= maxSemester; sem++) {

            int totalCredits = 0;
            double totalPoints = 0;

            for (Enrollment e : enrollments) {
                if (e.getStudent().getStudentId().equals(this.studentId) && e.getSemester() == sem && e.getGrade() != null) {

                    int basePoint = GradePoint.getGradePoint(e.getGrade());
                    double adjustedPoint = basePoint * 0.95;
                    int credits = e.getCourse().getCredits();

                    totalCredits += credits;
                    totalPoints += adjustedPoint * credits;
                }
            }

            if (totalCredits > 0) {
                totalGPA += totalPoints / totalCredits;
                countedSemesters++;
            }
        }

        if (countedSemesters == 0) return 0.0;

        return totalGPA / countedSemesters;
    }


    @Override
    public String getProgramType() {
        return "Postgraduate";
    }
}
