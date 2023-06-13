export interface Topic {
    isSelected: boolean;
    id: number;
    date: string;
    time: string;
    group: string;
    topic: string;
    lectures: number;
    practicalClasses: number;
    laboratoryWorks: number;
    controlWorks: number;
    kusr: number;
    test: number;
    exam: number;
    credit: number;
    isEdit: boolean;
}

export const TopicColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'id',
        type: 'number',
        label: '№ п/п',
    },
    {
        key: 'date',
        type: 'date',
        label: 'Дата',
    },
    {
        key: 'time',
        type: 'time',
        label: 'Время проведения занятий',
    },
    {
        key: 'group',
        type: 'text',
        label: 'Курс, группа',
    },
    {
        key: 'topic',
        type: 'text',
        label: 'Содержание работы',
    },
    {
        key: 'lectures',
        type: 'number',
        label: 'Лекции',
    },
    {
        key: 'practicalClasses',
        type: 'number',
        label: 'Практические, сем. занятия',
    },
    {
        key: 'laboratoryWorks',
        type: 'number',
        label: 'Лаборатор. работы',
    },
    {
        key: 'controlWorks',
        type: 'number',
        label: 'Контрольн. работы',
    },
    {
        key: 'kusr',
        type: 'number',
        label: 'КУСР',
    },
    {
        key: 'test',
        type: 'number',
        label: 'Тест',
    },
    {
        key: 'exam',
        type: 'number',
        label: 'Экзамен',
    },
    {
        key: 'credit',
        type: 'number',
        label: 'Зачет',
    },

    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];