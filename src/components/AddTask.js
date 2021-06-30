function AddTask(props) {
    const {task, setTask} = props
    function getinputvalue(event) {
        if(event.target[0].value === ''){
            setTask(task)
        }else{
            task.push(event.target[0].value)
            setTask([...task])
            event.target[0].value = ''

        }
    }
    return <div>
        <form action="#" id="inputValue" onSubmit={getinputvalue}>
            <input type="text" form="inputValue" />
            <button form="inputValue" className="btn btn-primary">Add</button>

        </form>
    </div>
}

export default AddTask