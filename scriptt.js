$(document).ready(function() {
    let tasks = [];

    $('#todo-form').submit(function(e) {
        e.preventDefault();
        let task = $('#task').val();
        let priority = $('#priority').val();
        tasks.unshift({ task, priority }); // Prepend new task to the top
        displayTasks();
        $('#task').val('');
    });

    function displayTasks() {
        let sortedTasks = tasks.sort((a, b) => {
            if (a.priority === 'high') return -1;
            if (b.priority === 'high') return 1;
            if (a.priority === 'medium') return -1;
            if (b.priority === 'medium') return 1;
            return 0;
        });
        let listHtml = '';
        sortedTasks.forEach((task, index) => {
            listHtml += `
                <li class="list-group-item ${task.priority}">
                    <span>${task.task}</span>
                    <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
                </li>
            `;
        });
        $('#todo-list').html(listHtml);
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
    }
});


