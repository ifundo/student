package com.example.entity;

public class Grade {
    private int id;
    private String courseId;
    private String accountId;
    private double score;
    private String comment;
    private String feedback;

    private String courseName;

    private String accountName;

    @Override
    public String toString() {
        return "Grade{" +
                "id=" + id +
                ", courseId='" + courseId + '\'' +
                ", accountId='" + accountId + '\'' +
                ", score=" + score +
                ", comment='" + comment + '\'' +
                ", feedback='" + feedback + '\'' +
                ", courseName='" + courseName + '\'' +
                ", accountName='" + accountName + '\'' +
                '}';
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
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

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
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
