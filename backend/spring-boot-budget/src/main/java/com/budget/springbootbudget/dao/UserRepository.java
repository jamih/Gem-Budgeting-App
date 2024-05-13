package com.budget.springbootbudget.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.springbootbudget.entity.User;

public interface UserRepository extends JpaRepository<User, Float> {

}
