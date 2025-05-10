import { formAction } from "./actions"
import Form from 'next/form';

export default async function Page() {
    return (
        <div>
            <Form action={formAction}>
                <label>Nome</label>
                <input name="name" />
                <label>Idade</label>
                <input name="age" />
                <label>Email</label>
                <input name="email" />
                <button type="submit">Enviar</button>
            </Form>
        </div>
    )
}