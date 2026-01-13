package com.university.storage;

import com.university.enrollment.Enrollment;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class FileHandling {

    private static final String ENROLLMENT_FILE = "enrollments.dat";

    public void saveEnrollments(List<Enrollment> enrollments) {

        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(ENROLLMENT_FILE))) {

            oos.writeObject(enrollments);
            System.out.println("Enrollments saved successfully.");

        } catch (IOException e) {
            System.out.println("Error saving enrollments: " + e.getMessage());
        }
    }

    @SuppressWarnings("unchecked")
    public List<Enrollment> loadEnrollments() {

        File file = new File(ENROLLMENT_FILE);

        if (!file.exists()) {
            return new ArrayList<>();
        }

        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))) {

            return (List<Enrollment>) ois.readObject();

        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading enrollments: " + e.getMessage());
            return new ArrayList<>();
        }
    }
}
