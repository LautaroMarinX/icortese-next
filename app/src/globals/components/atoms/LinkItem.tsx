"use client"

import { useCallback } from 'react'
import { Button } from '../UI/button'
import { LinksProps } from '../../types/Links'
import { useRouter } from 'next/navigation'
import { useBuscador } from '@/app/src/modules/buscador/components/stores/useBuscador'

interface LinkItemProps{
    link: LinksProps
    variant?: "ghost" | "secondary" | "default"
    className?: string
}

export const LinkItem = ({className, variant = "ghost", link}: LinkItemProps) => {
  const clearFilters = useBuscador(state => state.clearFilters)
  const router = useRouter()

  const handleClick = useCallback(() => {
    if (link.href === '/buscador') {
      clearFilters()
    }
    router.push(link.href)
  }, [link.href, clearFilters, router])

  return (
    <Button onClick={handleClick} className={className ? className  : ""} size={"sm"} variant={variant || "ghost"}>
      {link.label}
    </Button>
  );
}
