function MoreTasks(props) {
    const {task} = props
    return <div>
        {
            task?task.map((item, index)=> <p>
                <input type="checkbox" className="d-inline" />
                <h3 className="d-inline">{item}</h3>
            </p> ):''
        }
        
    </div>
}

export default MoreTasks