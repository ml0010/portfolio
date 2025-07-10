import img1 from '../assets/todo.png';
import img2 from '../assets/tour.png';

export const PROJECTS = [
    {
        title: 'Todo List',
        img: img1,
        description: 'React Todo-List app featuring real time clock, calendar, current browser or searched location weather API',
        link: 'https://ml0010.github.io/todo-list/',
        repository: 'https://github.com/ml0010/todo-list',
        skills: ['HTML', 'CSS', 'Java Script', 'React', 'Node.js', 'Express'],
        feature: 'User can add todo tasks on the date selected. User can edit, delete and amend the selected item from the list. When the task is completed user can record the completion. Also the app includes realtime clock and weather API of current / searched city location.',
    }, {
        title: 'E-commerce / Explore Mallorca',
        img: img2,
        description: `Mallorca's excursion tour agency. Built with React featuring Stripe payment system and MongoDB API.`,
        link: 'https://ml0010.github.io/react-shoppingcart/',
        repository: 'https://github.com/ml0010/react-shoppingcart',
        skills: ['HTML', 'CSS', 'Java Script', 'React', 'Node.js', 'Express', 'MongoDB'],
        feature: 'User can create accounts and login to their account. Possibility of booking listed tours using an account detail or as a visitor using credit card. Booking management - both edit, cancel - is possible via logging or by searching a booking reference number',
    }
];
