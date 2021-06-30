function Result(props) {
    const {task} = props
    return <div>
        <button className="btn btn-primary">{task.length}</button>
    </div>
}

export default Result