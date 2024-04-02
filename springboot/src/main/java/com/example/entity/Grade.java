package com.example.entity;

public class Grade {
    private int id;
    private String courseId;
    private String studentId;
    private double score;
    private String comment;
    private String feedback;

    private String courseName;

    private String studentName;

    @Override
    public String toString() {
        return "Grade{" +
                "id=" + id +
                ", courseId='" + courseId + '\'' +
                ", studentId='" + studentId + '\'' +
                ", score=" + score +
                ", comment='" + comment + '\'' +
                ", feedback='" + feedback + '\'' +
                ", courseName='" + courseName + '\'' +
                ", studentName='" + studentName + '\'' +
                '}';
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}
