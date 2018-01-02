/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igt.test.todo;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author myasir
 */
public interface TaskRepository extends JpaRepository<Task, Long>{
    
}
