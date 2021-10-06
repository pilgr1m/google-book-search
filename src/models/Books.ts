import { Book } from './Book'

export interface Books extends Record<string, any> {
    books: Book[]
    createdAt: string
    updatedAt: string
    date: string
    label?: string
}
