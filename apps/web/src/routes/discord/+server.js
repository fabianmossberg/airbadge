import { redirect } from '@sveltejs/kit'

export function GET() {
  redirect(303, 'https://discord.gg/KjGNepeChg')
}
