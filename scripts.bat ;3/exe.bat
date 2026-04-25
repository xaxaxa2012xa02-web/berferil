@echo off
:loop
:: Команда PowerShell для виклику вікна повідомлення
powershell -Command "Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show('1234''1234!', '1234!', 'OK', 'Warning')"

:: Повернення до початку циклу
goto loop