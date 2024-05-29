import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from './ui/input';
import { Button } from './button';
import { SelectCustom, SelectCustomItem } from './select';
import { Label } from './ui/label';
import Image from 'next/image';
import { LoadingSpinner } from './loading-spinner';
import { useToast } from "@/components/ui/use-toast";
import { twMerge } from 'tailwind-merge';

const RegisterModal: React.FC<{ children: any, initMail?: string }> = ({ children, initMail }) => {
    const { toast } = useToast();

    const [form, setForm] = useState<{ mail: string, type: string, id: null | number, referral: null | string }>({ mail: initMail ?? '', type: 'tutor', id: null, referral: null });
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    async function handleRegister() {
        if (!form.mail || !form.type || form.mail.trim().localeCompare("", undefined, { sensitivity: "base" }) === 0 || form.type.trim().localeCompare("", undefined, { sensitivity: "base" }) === 0) {
            toast({
                title: "⚠️ e-mail, cadê você?",
                description: "Seu e-mail escapou da coleira! Pode adicioná-lo?",
            });
            return;
        }

        try {
            setLoading(true);

            const response = await fetch('/api/wait', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mail: form.mail, type: form.type }),
            });

            const { referral, id }: { referral: string, id: number } = await response.json();

            setForm({ ...form, id: id, referral: referral })
        } catch (error) {
            toast({
                title: "⚡ Problemas no Servidor",
                description: "O dog encontrou o fio do servidor. Estamos corrigindo!",
            });
        } finally {
            setLoading(false);
        }
    }

    function ContentRegister() {

        if (form.id && form.referral) {
            return;
        }


        if (!loading) {
            return (
                <div className='flex flex-col justify-between bg-transparent bg-[linear-gradient(to_right,#F7F7F710,transparent_2px),linear-gradient(to_bottom,#F7F7F710,transparent_2px)] bg-[size:6rem_4rem]'>
                    <DialogHeader className='pt-4 sm:pt-0'>
                        <DialogTitle className='text-miau-white'>Conecte-se ao ecossistema Pet definitivo</DialogTitle>
                        <DialogDescription className='text-miau-white/60'>
                            Seja um dos primeiros a receber acesso ao MiAu Club e transforme a gestão do cuidado e bem-estar do seu pet com nosso ecossistema inovador na palma da sua mão.🐶 🐈
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 px-2">
                        <div className="grid grid-cols-2 items-center justify-start">
                            <Label className='text-miau-white' htmlFor='mail'>Meu e-mail é</Label>
                            <Input
                                onChangeCapture={e => setForm({ ...form, mail: e.currentTarget.value })}
                                id='mail'
                                type="email"
                                value={form.mail}
                                placeholder="e-mail"
                                className='bg-white text-miau-black'
                            />
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <Label className='text-miau-white' htmlFor='types'>Sou um(a)</Label>
                            <SelectCustom
                                id={'types'}
                                onChange={(e) => setForm({ ...form, type: e })}
                                defaultValue='tutor'
                                className='bg-miau-blueLight font-bold sm:mw-60'>
                                <SelectCustomItem value='tutor' description='Tutor(a)' />
                                <SelectCustomItem value='pet-tech' description='Pet-tech' />
                                <SelectCustomItem value='partner' description='Profissional da área pet' />
                            </SelectCustom>
                        </div>
                    </div>
                    <DialogFooter className='gap-2'>
                        <div className={"flex flex-row relative justify-center items-center gap-4"}>
                            <p className='text-base text-miau-white/50 font-thin'>Compartilhe nas suas redes sociais</p>
                            {[
                                { src: "/imgs/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/miauclubapp/" },
                                { src: "/imgs/tik-tok.svg", alt: "TikTok", href: "https://www.tiktok.com/@miauclubapp" }
                            ].map(({ src, alt, href }) => {
                                return (
                                    <a href={href} key={alt}>
                                        <Image
                                            src={src}
                                            alt={alt}
                                            width={22}
                                            height={22}
                                            quality={100}
                                            priority
                                        />
                                    </a>
                                )
                            })}
                        </div>
                        <Button text='Inscreva-se' variant='secondary' onClick={handleRegister} />
                    </DialogFooter>
                </div>
            )
        }

        return null
    }

    function SuccessRegister() {

        if (!form.id && !form.referral) {
            return
        }

        return (
            <div className='flex flex-col items-center gap-8 sm:gap-4 text-center bg-transparent bg-[linear-gradient(to_right,#F7F7F710,transparent_2px),linear-gradient(to_bottom,#F7F7F710,transparent_2px)] bg-[size:6rem_4rem]'>
                <h3 className='font-bold text-miau-white max-w-[30rem]'>Obrigado por querer fazer parte desse momento único no universo pet, pois
                    esse mundo é o que iremos construir a partir de hoje! </h3>

                <div className='h-10 w-full rounded-sm bg-miau-black justify-center items-center flex'>
                    <p className='text-miau-yellowDark text-base'>Você é o número <span className='font-bold text-miau-yellow'>{form?.id}</span> em nossa lista  🐶 🐱</p>
                </div>

                <h2 className='text-miau-white/80 font-bold' >Quer acessar mais cedo ?</h2>

                <div className="rounded-md border border-miau-white/80 px-4 py-2 font-mono text-sm shadow-sm text-miau-white">
                    https://www.miauclub.com.br/?code={form.referral}
                </div>
            </div>
        )
    }

    return (
        <>
            <Dialog onOpenChange={(open) => setIsOpen(open)}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className={twMerge(
                    "sm:max-w-[50rem] w-[95vw] justify-center rounded-sm bg-miau-branding border-miau-blueLight z-50",
                    loading ? '' : 'h-[60vh] sm:h-[34vh]')}
                >
                    {loading && <LoadingSpinner className='text-miau-white' />}
                    {ContentRegister()}
                    <SuccessRegister />

                </DialogContent>
            </Dialog>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-20"></div>}

        </>
    );
};

export { RegisterModal };
