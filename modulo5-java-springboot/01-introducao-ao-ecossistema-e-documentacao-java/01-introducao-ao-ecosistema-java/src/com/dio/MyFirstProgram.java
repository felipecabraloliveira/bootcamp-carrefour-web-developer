package com.dio;

import com.dio.base.Order;

public class MyFirstProgram {
    public static void main(String[] args) {
        Order order = new Order("Teste", 222.99);
        System.out.println(order);
    }
}