"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"


export default function SignIn() {
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Função para formatar o CPF enquanto o usuário digita
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove caracteres não numéricos

    if (value.length <= 11) {
      // Formata o CPF (xxx.xxx.xxx-xx)
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      setCpf(value)
    }
  }

  return (
    <form action={
      async (formData) => {
        const cpf = formData.get("cpf") as string
        const password = formData.get("password") as string
        const unmaskedCpf = cpf.replace(/\D/g, "") // Remove a máscara do CPF
        try{
          //await login({ cpf: unmaskedCpf, password })
        } catch (error: any) {
          console.error("Erro ao fazer login:", error)
          //toast.error("Erro ao fazer login. Verifique suas credenciais.", error.message)
        }
        
      }
    } className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cpf">CPF</Label>
        <Input
          id="cpf"
          name="cpf"
          type="text"
          placeholder="000.000.000-00"
          value={cpf}
          onChange={handleCpfChange}
          maxLength={14}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <Button className="w-full" type="submit">
        Entrar 
      </Button>

      <div className="text-center text-sm">
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Esqueceu sua senha?
        </Link>
      </div>
    </form>
  )
}
