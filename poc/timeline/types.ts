export interface TimelineEvent {
    title: string;
    description: string;
    date: Date;
}

export interface Period {}

export interface Timeline {
    events: TimelineEvent[];
}