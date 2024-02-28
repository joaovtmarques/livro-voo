"use client";

import { ChevronDown } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useState } from "react";
import Button from "../_components/button";
import { useDb } from "../_lib/db";

const rank = [
  "Cel",
  "TC",
  "Maj",
  "Cap",
  "1º Ten",
  "2º Ten",
  "Asp",
  "St",
  "1º SGT",
  "2º SGT",
  "3º SGT",
  "Cb",
  "Sd EP",
  "Sd EV",
];

const su = ["1ª Cia", "2ª Cia", "3ª Cia", "CCAp", "Banda", "E.M. 6ºBIL"];

export interface IFormInput {
  name: string;
  warName: string;
  rank: string;
  phoneNumber: string;
  su: string;
  id: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
}

const Home = () => {
  const [id, setId] = useState("");

  const { registerUserTrip } = useDb();
  const { register, handleSubmit, control } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await registerUserTrip(data);
  };

  return (
    <div className="py-14 overflow-auto">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="font-semibold text-black text-2xl">Livro de Voo</h1>
        <p className="text-black text-xs">Preencha os campos abaixo.</p>
      </div>
      <div className="flex items-center justify-center mt-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-3/4 md:w-2/4 lg:w-1/3 flex flex-col gap-4"
        >
          <input
            {...register("name")}
            placeholder="Nome completo"
            className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
          text-gray3 outline-none focus-within:border-black focus-within:text-black "
          />
          <input
            {...register("warName")}
            placeholder="Nome de guerra"
            className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
          text-gray3 outline-none focus-within:border-black focus-within:text-black "
          />
          <div className="flex gap-4">
            <Controller
              control={control}
              name="rank"
              render={({ field }) => {
                return (
                  <Select.Root onValueChange={field.onChange} {...field}>
                    <Select.Trigger
                      className="SelectTrigger"
                      aria-label="Posto/Graduação"
                    >
                      <Select.Value placeholder="Selecione o posto/graduação" />
                      <Select.Icon className="SelectIcon">
                        <ChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="SelectContent">
                        <Select.ScrollUpButton className="SelectScrollButton">
                          <ChevronDown />
                        </Select.ScrollUpButton>
                        <Select.Viewport className="SelectViewport">
                          <Select.Group>
                            <Select.Label className="SelectLabel">
                              Selecione o posto/graduação
                            </Select.Label>
                            {rank.map((rank, key) => {
                              return (
                                <Select.Item
                                  className="SelectItem"
                                  value={rank}
                                  key={key}
                                >
                                  <Select.ItemText>{rank}</Select.ItemText>
                                  <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
                                </Select.Item>
                              );
                            })}
                          </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton className="SelectScrollButton">
                          <ChevronDown />
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                );
              }}
            ></Controller>
            <input
              {...register("phoneNumber")}
              placeholder="Telefone"
              className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
            text-gray3 outline-none focus-within:border-black focus-within:text-black "
            />
          </div>
          <Controller
            control={control}
            name="su"
            render={({ field }) => {
              return (
                <Select.Root onValueChange={field.onChange} {...field}>
                  <Select.Trigger className="SelectTrigger" aria-label="OM/Su">
                    <Select.Value placeholder="Selecione a OM/Su" />
                    <Select.Icon className="SelectIcon">
                      <ChevronDown />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="SelectContent">
                      <Select.ScrollUpButton className="SelectScrollButton">
                        <ChevronDown />
                      </Select.ScrollUpButton>
                      <Select.Viewport className="SelectViewport">
                        <Select.Group>
                          <Select.Label className="SelectLabel">
                            Selecione a OM/Su
                          </Select.Label>
                          {su.map((su, key) => {
                            return (
                              <Select.Item
                                className="SelectItem"
                                value={su}
                                key={key}
                              >
                                <Select.ItemText>{su}</Select.ItemText>
                                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
                              </Select.Item>
                            );
                          })}
                        </Select.Group>
                      </Select.Viewport>
                      <Select.ScrollDownButton className="SelectScrollButton">
                        <ChevronDown />
                      </Select.ScrollDownButton>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              );
            }}
          ></Controller>
          <div className="flex gap-4">
            <input
              {...register("id")}
              placeholder="Identidade Militar (ex: 0000000000)"
              type="number"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
            text-gray3 outline-none focus-within:border-black focus-within:text-black "
            />
            <input
              {...register("destination")}
              placeholder="Destino"
              className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
            text-gray3 outline-none focus-within:border-black focus-within:text-black "
            />
          </div>
          <div className="flex gap-4">
            <div>
              <label htmlFor="departureDate" className="text-sm text-black">
                Data de partida
              </label>
              <input
                {...register("departureDate")}
                placeholder="Data de partida"
                type="date"
                id="departureDate"
                className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
              text-gray3 outline-none focus-within:border-black focus-within:text-black "
              />
            </div>
            <div>
              <label htmlFor="returnDate" className="text-sm text-black">
                Data de retorno
              </label>
              <input
                {...register("returnDate")}
                placeholder="Data de retorno"
                type="date"
                id="returnDate"
                className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
              text-gray3 outline-none focus-within:border-black focus-within:text-black "
              />
            </div>
          </div>
          <Button title="Enviar" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Home;
