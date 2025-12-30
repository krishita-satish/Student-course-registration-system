package com.university.courses;

import java.io.Serializable;

public class Course implements Serializable {

    private String courseCode;
    private String courseName;
    private int credits;

    public Course(String courseCode, String courseName, int credits) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.credits = credits;
    }
}
