import img1 from '../assets/todo.png';
import img2 from '../assets/tour.png';

export const PROJECTS = [
    {
        title: 'Todo List',
        img: img1,
        description: {
            en : 'React Todo List app featuring real time clock, calendar, current browser or searched location weather API',
            es : '',
            kr: '리액트 기반의 리얼타임 시계, 달력, 브라우저 현재 위치 혹은 서치결과를 기반으로 한 날씨 API를 추가한 Todo List 앱.'
        },
        link: 'https://ml0010.github.io/todo-list/',
        repository: 'https://github.com/ml0010/todo-list',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'],
        feature: {
            en: 'User can add todo tasks on the date selected. User can edit, delete and amend the selected item from the list. When the task is completed user can record the completion. Also the app includes realtime clock and weather API of current / searched city location.',
            es: '',
            kr: ''
        },
    }, {
        title: 'E-commerce / Explore Mallorca',
        img: img2,
        description: {
            en: `Mallorca's excursion tour agency webpage featuring Stripe payment system and MERN stack.`,
            es: '',
            kr: '마요르카 데이트립 여행사 웹사이트. Stripe 신용카드 결제 시스템과 MERN 스택을 이용한 구현.'
        },
        link: 'https://ml0010.github.io/react-shoppingcart/',
        repository: 'https://github.com/ml0010/react-shoppingcart',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
        feature: {
            en: 'User can create accounts and login to their account. Possibility of booking listed tours using an account detail or as a visitor using credit card. Booking management - both edit, cancel - is possible via logging or by searching a booking reference number',
            es: '',
            kr: ''
        },
    }
];
