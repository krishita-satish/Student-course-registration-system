package com.university.grading;

public class GradePoint {

    public static int getGradePoint(String grade) {

        switch (grade) {
            case "O":  return 10;
            case "A+": return 9;
            case "A":  return 8;
            case "B+": return 7;
            case "B":  return 6;
            case "C":  return 5;
            default:   return 0; // F
        }
    }
}
