import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

function addTask(toDoList,text="Laundry"){
    const input= toDoList.getByLabelText("Task")
    const btn =toDoList.queryByText("Add")
    fireEvent.change(input,{target: {value:'Laundry'}})
    fireEvent.click(btn)
}
it("renders without crashing", function(){
    render(<ToDoList />)
})
it("matches snapshot",function(){
    const { asFragment } = render(<ToDoList />)
    expect(asFragment()).toMatchSnapshot()
})

it("should add new item",function(){
    const toDoList= render(<ToDoList />)
    expect(toDoList.queryByText("Remove")).not.toBeInTheDocument();
    addTask(toDoList)
    const removeButton = toDoList.getByText("Remove");
    expect(toDoList.queryByText('Laundry')).toBeInTheDocument()
    expect(removeButton).toBeInTheDocument();
    
})
it("should remove task",function(){
    const toDoList= render(<ToDoList />)
    addTask(toDoList)
    const removeButton = toDoList.getByText("Remove");
    fireEvent.click(removeButton)
    expect(removeButton).not.toBeInTheDocument()
})
